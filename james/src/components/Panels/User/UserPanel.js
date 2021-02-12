import React from 'react';

const UserPanel = () => {
    return (
        <div>
            <h1>Followed Stocks</h1>
            <ul class="list-group dahsboard-stocks">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Nike
                    <span class="badge badge-primary badge-pill">14</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Tesla
                    <span class="badge badge-primary badge-pill">2</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    Apple
                    <span class="badge badge-primary badge-pill">1</span>
                </li>
            </ul>
        </div>
    )
}

export default UserPanel
