<?php

namespace App\Policies;

use App\Models\Employer;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class EmployerPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view any models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function viewAny(User $user)
    {
        // Only a developer can view employers
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can view the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function view(User $user, Employer $employer)
    {
        // Only a developer can view an employer
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can create models.
     *
     * @param  \App\Models\User  $user
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function create(User $user)
    {
        // Only a developer can create an employer
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can update the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function update(User $user, Employer $employer)
    {
        // Only a developer can update an employer
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function delete(User $user, Employer $employer)
    {
        // Only a developer can delete an employer
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can restore the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function restore(User $user, Employer $employer)
    {
        // Only a developer can restore an employer
        return ($user->role === 'developer');
    }

    /**
     * Determine whether the user can permanently delete the model.
     *
     * @param  \App\Models\User  $user
     * @param  \App\Models\Employer  $employer
     * @return \Illuminate\Auth\Access\Response|bool
     */
    public function forceDelete(User $user, Employer $employer)
    {
        // Only a developer can forceDelete an employer
        return ($user->role === 'developer');
    }
}
