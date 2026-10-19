<?php

namespace App\Http\Controllers;

use Illuminate\Http\Client\ConnectionException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use RuntimeException;

class EmailController extends Controller
{
    public function send(Request $request): JsonResponse
    {
        if ($request->filled('website')) {
            return response()->json(['success' => true]);
        }

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'email', 'max:255'],
            'message' => ['required', 'string', 'max:2000'],
        ]);

        $address = (string) config('mail.contact.address');
        $formId = (string) config('mail.contact.formsubmit');

        try {
            $response = Http::connectTimeout(3)
                ->timeout(10)
                ->asJson()
                ->acceptJson()
                ->withHeaders([
                    'Origin' => $request->headers->get('origin') ?: $request->getSchemeAndHttpHost(),
                    'Referer' => $request->headers->get('referer') ?: url('/'),
                ])
                ->post('https://formsubmit.co/ajax/'.$formId, [
                    'name' => $validated['name'],
                    'email' => $validated['email'],
                    '_replyto' => $validated['email'],
                    'message' => $validated['message'],
                    '_subject' => 'Portfolio inquiry from '.$validated['name'],
                    '_template' => 'table',
                    '_captcha' => 'false',
                ]);
        } catch (ConnectionException $exception) {
            report($exception);

            return response()->json([
                'message' => 'The message could not be sent. Email '.$address.' directly.',
            ], 502);
        }

        $accepted = $response->json('success');
        $providerMessage = strtolower((string) $response->json('message'));

        if (! $response->successful() || $accepted === false || $accepted === 'false') {
            if (str_contains($providerMessage, 'activat') || str_contains($providerMessage, 'confirm')) {
                return response()->json([
                    'message' => 'Check '.$address.' for a confirmation email, open it, then send this message again.',
                ], 502);
            }

            report(new RuntimeException(
                'Contact form delivery failed with status '.$response->status().' body '.$response->body()
            ));

            return response()->json([
                'message' => 'The message could not be sent. Email '.$address.' directly.',
            ], 502);
        }

        return response()->json(['success' => true]);
    }
}
