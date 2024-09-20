const rooms = [
    {
        id: 1,
        name: "Deluxe Room",
        price: 6000,
        imageUrl: "room1.jpg",
        availableDates: [
            { checkin: "2024-09-01", checkout: "2024-09-10" }
        ]
    },
    {
        id: 2,
        name: "Standard Room",
        price: 3500,
        imageUrl: "room2.jpg",
        availableDates: [
            { checkin: "2024-09-05", checkout: "2024-09-15" }
        ]
    },
    {
        id: 3,
        name: "Family Suite",
        price: 8500,
        imageUrl: "room3.jpg",
        availableDates: [
            { checkin: "2024-09-18", checkout: "2024-09-23" }
        ]
    },
    {
        id: 4,
        name: "Single Room",
        price: 2500,
        imageUrl: "room4.jpg",
        availableDates: [
            { checkin: "2024-09-04", checkout: "2024-09-11" }
        ]
    },
    {
        id: 5,
        name: "Executive Room",
        price: 10000,
        imageUrl: "room5.jpg",
        availableDates: [
            { checkin: "2024-09-02", checkout: "2024-09-08" },
            { checkin: "2024-10-05", checkout: "2024-10-12" }
        ]
    },
    {
        id: 6,
        name: "Presidential Room",
        price: 20000,
        imageUrl: "room6.jpg",
        availableDates: [
            { checkin: "2024-09-12", checkout: "2024-09-18" }
        ]
    }
    
];

function isDateAvailable(checkinDate, checkoutDate, roomDates) {
    for (let range of roomDates) {
        const availableCheckin = new Date(range.checkin);
        const availableCheckout = new Date(range.checkout);
        if (
            new Date(checkinDate) >= availableCheckin &&
            new Date(checkoutDate) <= availableCheckout
        ) {
            return true;
        }
    }
    return false;
}

document.getElementById('availabilityForm')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const checkinDate = document.getElementById('checkin').value;
    const checkoutDate = document.getElementById('checkout').value;

    if (new Date(checkinDate) > new Date(checkoutDate)) {
        alert('Check-in date should be before the check-out date.');
        return;
    }

    const availableRooms = rooms.filter(room =>
        isDateAvailable(checkinDate, checkoutDate, room.availableDates)
    );

    displayAvailableRooms(availableRooms, checkinDate, checkoutDate);
});

function displayAvailableRooms(rooms, checkin, checkout) {
    const availableRoomsDiv = document.getElementById('availableRooms');
    availableRoomsDiv.innerHTML = ''; 

    if (rooms.length > 0) {
        availableRoomsDiv.innerHTML = `<h3>Available Rooms for ${checkin} to ${checkout}:</h3>`;
        rooms.forEach(room => {
            availableRoomsDiv.innerHTML += `
                <div class="room">
                <img src="${room.imageUrl}" class="room-image"/>
                <div class="room-details">
                    <h4>${room.name}</h4>
                    <p>Price: ₹${room.price}/night</p>
                        <button onclick="bookRoom('${room.name}', '${checkin}', '${checkout}', ${room.price})">Book Now</button>
                    </div>
                </div>
            `;
        });
    } else {
        availableRoomsDiv.innerHTML = '<p>No rooms available for the selected dates.</p>';
    }
}

function bookRoom(roomName, checkinDate, checkoutDate, price) {
    alert(`You selected the ${roomName} from ${checkinDate} to ${checkoutDate}. Total cost: ₹${price}.`);
    const bookingUrl = `booking.html?room=${encodeURIComponent(roomName)}&checkin=${encodeURIComponent(checkinDate)}&checkout=${encodeURIComponent(checkoutDate)}&price=${encodeURIComponent(price)}`;
    

    window.location.href = bookingUrl;
}
