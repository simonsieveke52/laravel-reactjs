<?php

namespace App\Http\Controllers\Usage;


use App\Models\Content;
use App\Models\Employer;
use App\Models\Pivots\LoginDetail;

use Illuminate\Support\Facades\Hash;
use DB;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
use Illuminate\Support\Facades\Http;
use App\Models\User;
use Carbon\Carbon;
 
class Usage extends Controller
{

    use Authenticated;
    public $employers;
    public $allUser;
    public $activeUser;
    public $content_engagement;
    public $employer;
    public $current_employer;
    public $locations;
    public $usersByLocation;
    public $usersBySite;
    public $loginCount;

    public function onDispatch(){
        $this->employer = session()->get('employer');
        $this->allUser = Employer::find($this->employer)->users ?? collect([]);
        $allLocation = Employer::find($this->employer)->locations ?? collect([]);

        $this->usersByLocation = $allLocation->map(function($location){
            return array_merge($location->toArray(),[
                'users' => optional($location->users)->all(),
            ]);
        });

        $this->usersBySite = $allLocation->map(function($location){
            return array_merge($location->toArray(),[
                'users' => optional($location->users)->all(),
            ]);
        });

        $this->current_employer = Employer::find($this->employer);
        $all_user_ids = Employer::find($this->employer)->users()->pluck('id');
        $this->content_engagement = Content::select(array('contents.category', DB::raw('count(contents_users.user_id) as visits')))
            ->join('contents_users', 'contents_users.content_id', '=', 'contents.id')
            ->where('contents_users.created_at', '>=', new Carbon('first day of this month'))
            ->whereIn('contents_users.user_id', $all_user_ids)
            ->groupBy('contents.category')->get();


        $this->activeUser = Employer::find($this->employer)->users()->where('last_login_at', '>=', new Carbon('first day of this month'))->get() ?? collect([]);
        $loginUsers = Employer::find($this->employer)->users()->pluck('id')->toArray();
        $this->loginCount = LoginDetail::whereIn("user_id", $loginUsers)->where('created_at', '>=', new Carbon('first day of this month'))->get() ?? collect([]);
    }
}