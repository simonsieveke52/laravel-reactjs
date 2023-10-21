<?php

namespace App\Http\Controllers\Resources;


use App\Models\Content;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;

class Delete extends Controller
{
    use Authenticated;

    public Content $content;

    public function onMount(){
        $this->content = Content::findOrFail(optional($this->props())->resourceId);
        $this->authorise('delete',$this->content);
    }

    public function save(){  
        $this->content->delete();
        $this->redirect('/resources');
    }
       
}