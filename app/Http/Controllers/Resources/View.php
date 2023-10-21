<?php

namespace App\Http\Controllers\Resources;


use App\Models\Content;
use App\Models\Pivots\ContentUser;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class View extends Controller
{
    use Authenticated;

    public Content $content;
    public ContentUser $content_user;
    public $role;

    public function onMount(){

        $this->content = Content::findOrFail(optional($this->props())->resourceId);
        $this->role  = optional(auth()->user())->role;

        $user = auth()->user()->id;
       
        $this->content_user = new ContentUser();
        $this->content_user->content_id = $this->content->id;
        $this->content_user->user_id = $user;
        $this->content_user->save();
        $this->authorise('view',$this->content);
    }

       
}