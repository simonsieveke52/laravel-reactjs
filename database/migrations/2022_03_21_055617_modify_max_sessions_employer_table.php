<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::table('employers', function (Blueprint $table) {
            $table->dropColumn('maximum_sessions');
        });
        Schema::table('employers', function (Blueprint $table) {
            $table->integer('maximum_sessions')->default(-1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::table('employers', function (Blueprint $table) {
            $table->dropColumn('maximum_sessions');
        });
    }
};
