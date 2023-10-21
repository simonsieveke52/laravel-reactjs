<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Sihq\Bootstrap\Traits\UuidTrait;
use Illuminate\Support\Str;
use Sihq\Casts\FileCast;
use Sihq\Facades\File;

class Content extends Model
{
    use HasFactory, UuidTrait;


    protected $fillable = [
        'title',
        'description',
        'category',
        'cover_image',
        'content',
        'pinned_position'
    ];

    protected $casts = [
        'cover_image' => FileCast::class,
        'content' => 'json',
    ];


    protected static function booted()
    {
        static::creating(function ($model) {
            if (!optional($model)->id) {
                $model->id = (string) Str::uuid();
            }
        });
        static::saving(function ($model) {
            if($model->cover_image && $model->cover_image->status() === 'staged'){
                $model->cover_image->persist(true);
                if(isSet($model->getOriginal()['cover_image'])){
                    $model->getOriginal()['cover_image']->purge();
                }
            }

            if(is_array($model->content)){
                foreach ($model->content as $value) {
                    if ($value['data'] && isset($value['data']['image'])) {
                        $image = new File((object) $value['data']['image']);
                        $image->persist(true);
                    }
                }
            }
            return true;
        });
    }
}
