<?php

namespace App\Http\Controllers\Resources;


use App\Models\Content;

use Illuminate\Support\Facades\Hash;
use Sihq\Facades\Controller;
use Sihq\Traits\Authenticated;
class Create extends Controller
{
    use Authenticated;

    public Content $content;

    public function onMount(){

        $this->content = Content::findOrNew(optional($this->props())->resourceId);
        if(!$this->content->exists){
            $this->content->category = 'stress';
            $this->authorise('create',Content::class);
        }else{
            $this->authorise('update',$this->content);
        }
        $this->positions = Content::where('pinned_position','!=',null)->orderBy('pinned_position')->get()->pluck('pinned_position');
        
    }


    public function save(){  
      
        $this->content->save();
    }
       
}