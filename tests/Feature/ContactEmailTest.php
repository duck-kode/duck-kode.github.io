<?php

use Illuminate\Support\Facades\Http;

it('sends a recruiter message to the portfolio inbox', function () {
    Http::preventStrayRequests();
    Http::fake([
        'formsubmit.co/*' => Http::response(['success' => 'true'], 200),
    ]);

    $response = $this->postJson('/email', [
        'name' => 'Ava Chen',
        'email' => 'ava@example.com',
        'message' => 'We have a React Native role.',
    ]);

    $response->assertOk()->assertJson(['success' => true]);

    Http::assertSent(function ($request) {
        return $request->url() === 'https://formsubmit.co/ajax/03947b0533d6f6fb996801b304ab4d44'
            && str_contains($request->header('Content-Type')[0] ?? '', 'application/json')
            && str_starts_with($request->header('Origin')[0] ?? '', 'http')
            && str_starts_with($request->header('Referer')[0] ?? '', 'http')
            && $request['name'] === 'Ava Chen'
            && $request['email'] === 'ava@example.com'
            && $request['_replyto'] === 'ava@example.com'
            && $request['message'] === 'We have a React Native role.'
            && $request['_subject'] === 'Portfolio inquiry from Ava Chen';
    });
});

it('rejects an empty contact form', function () {
    Http::fake();

    $response = $this->postJson('/email', []);

    $response->assertUnprocessable()->assertJsonValidationErrors([
        'name' => 'The name field is required.',
        'email' => 'The email field is required.',
        'message' => 'The message field is required.',
    ]);

    Http::assertNothingSent();
});

it('rejects an email address that cannot be replied to', function () {
    Http::fake();

    $response = $this->postJson('/email', [
        'name' => 'Ava Chen',
        'email' => 'not-an-email',
        'message' => 'Hello',
    ]);

    $response->assertUnprocessable()->assertJsonValidationErrors([
        'email' => 'The email field must be a valid email address.',
    ]);

    Http::assertNothingSent();
});

it('does not send when the hidden field is filled', function () {
    Http::fake();

    $response = $this->postJson('/email', [
        'name' => 'Bot',
        'email' => 'bot@example.com',
        'message' => 'Buy this',
        'website' => 'http://spam.test',
    ]);

    $response->assertOk()->assertJson(['success' => true]);

    Http::assertNothingSent();
});

it('asks the owner to confirm the form before the first message can arrive', function () {
    Http::preventStrayRequests();
    Http::fake([
        'formsubmit.co/*' => Http::response([
            'success' => 'false',
            'message' => 'This form needs Activation. Check your inbox.',
        ], 200),
    ]);

    $response = $this->postJson('/email', [
        'name' => 'Ava Chen',
        'email' => 'ava@example.com',
        'message' => 'Hello',
    ]);

    $response->assertStatus(502)->assertJson([
        'message' => 'Check francisgalan21@gmail.com for a confirmation email, open it, then send this message again.',
    ]);
});

it('tells the recruiter to email directly when delivery fails', function () {
    Http::fake([
        'formsubmit.co/*' => Http::response('nope', 500),
    ]);

    $response = $this->postJson('/email', [
        'name' => 'Ava Chen',
        'email' => 'ava@example.com',
        'message' => 'Hello',
    ]);

    $response->assertStatus(502)->assertJson([
        'message' => 'The message could not be sent. Email francisgalan21@gmail.com directly.',
    ]);
});
