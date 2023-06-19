<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WelcomeEmail extends Mailable
{
    use Queueable, SerializesModels;

    private string $email;
    private string $userName;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(string $email, string $userName)
    {
        $this->email = $email;
        $this->userName = $userName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Welcome to lumen blog')
            ->from('C109152304@nkust.edu.tw')
            ->view('emails.welcomeEmail', ['userName' => $this->userName])
            ->with([
                'name' => $this->userName,
                'email' => $this->email,
            ]);
    }
}
