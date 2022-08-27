import React from 'react';
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div class="drawer drawer-mobile h-auto">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">

                <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="men p-4 w-60 bg-white text-base-content">
                    <h2 className='text-xl font-semibold mt-6 mb-2'>Sub Categories</h2>
                    <hr />
                    <li className='mb-4 cursor-pointer mt-6'><a>DJI Cameras</a></li>
                    <li className='mb-4 cursor-pointer'><a>GoPro Cameras</a></li>
                    <li className='mb-4 cursor-pointer'><a>GoPro and Mobile Gimbal</a></li>
                    <li className='mb-4 cursor-pointer'><a>Action Camera Adons</a></li>
                    <li className='mb-4 cursor-pointer'><a>360 Cameras</a></li>
                    <li className='mb-4 cursor-pointer'><a>Action Camera Mounts</a></li>

                </ul>

            </div>
        </div>
    );
};

export default Main;