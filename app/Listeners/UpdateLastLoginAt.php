<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Carbon\Carbon;
use Illuminate\Auth\Events\Login;
use App\Models\Pivots\LoginDetail;

class UpdateLastLoginAt
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $event->user->last_login_at = $event->user->last_login_at = Carbon::now();
        $event->user->save();

        $loginDetails = new LoginDetail();
        $loginDetails->user_id = auth()->user()->id;
        $loginDetails->save();
    }
}
