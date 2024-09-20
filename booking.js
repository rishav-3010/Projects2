document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const price = urlParams.get('price');

    const roomPrices = {
        deluxe: 6000,
        standard: 3500,
        family_suite: 8500,
        single: 2500,
        executive: 10000,
        presidential: 20000
    };

    function updateTotalCost() {
        const checkinDate = new Date(document.getElementById('checkinDate').value);
        const checkoutDate = new Date(document.getElementById('checkoutDate').value);
        const roomType = document.getElementById('roomType').value;

        if (checkinDate && checkoutDate && checkinDate < checkoutDate) {
            const timeDifference = Math.abs(checkoutDate - checkinDate);
            const daysStayed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

            const totalCost = roomPrices[roomType] * daysStayed;

            
            document.getElementById('numDays').textContent = `Number of days: ${daysStayed}`;
            document.getElementById('totalCost').textContent = `Total cost: ₹${totalCost}`;
        } else {
            document.getElementById('numDays').textContent = 'Number of days: ';
            document.getElementById('totalCost').textContent = 'Total cost: ';
        }
    }

    if (room) {
        document.getElementById('roomType').value = 
            room.toLowerCase().includes('deluxe') ? 'deluxe' :
            room.toLowerCase().includes('standard') ? 'standard' :
            room.toLowerCase().includes('family suite') ? 'family_suite' :
            room.toLowerCase().includes('single') ? 'single' :
            room.toLowerCase().includes('executive') ? 'executive' :
            room.toLowerCase().includes('presidential') ? 'presidential' :
            'standard'; // Default value if no match is found
            
            document.getElementById('roomType').disabled = true;
    }

    if (checkin) {
        document.getElementById('checkinDate').value = checkin;
        document.getElementById('checkinDate').readOnly = true;
    }

    if (checkout) {
        document.getElementById('checkoutDate').value = checkout;
        document.getElementById('checkoutDate').readOnly = true;
    }

    updateTotalCost();

    document.getElementById('checkinDate').addEventListener('change', updateTotalCost);
    document.getElementById('checkoutDate').addEventListener('change', updateTotalCost);
    document.getElementById('roomType').addEventListener('change', updateTotalCost);


    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const checkinDate = new Date(document.getElementById('checkinDate').value);
        const checkoutDate = new Date(document.getElementById('checkoutDate').value);
        const roomType = document.getElementById('roomType').value;

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert('Invalid phone number. It should start with 6-9 and be 10 digits.');
            return;
        }

        if (checkinDate >= checkoutDate) {
            alert('Check-out date must be after check-in date.');
            return;
        }

        const timeDifference = Math.abs(checkoutDate - checkinDate);
        const daysStayed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

        const totalCost = roomPrices[roomType] * daysStayed;
        document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const room = urlParams.get('room');
    const checkin = urlParams.get('checkin');
    const checkout = urlParams.get('checkout');
    const price = urlParams.get('price');

    const roomPrices = {
        deluxe: 6000,
        standard: 3500,
        family_suite: 8500,
        single: 2500,
        executive: 10000,
        presidential: 20000
    };

    function updateTotalCost() {
        const checkinDate = new Date(document.getElementById('checkinDate').value);
        const checkoutDate = new Date(document.getElementById('checkoutDate').value);
        const roomType = document.getElementById('roomType').value;

        if (checkinDate && checkoutDate && checkinDate < checkoutDate) {
            const timeDifference = Math.abs(checkoutDate - checkinDate);
            const daysStayed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

            const totalCost = roomPrices[roomType] * daysStayed;

            document.getElementById('numDays').textContent = `Number of days: ${daysStayed}`;
            document.getElementById('totalCost').textContent = `Total cost: ₹${totalCost}`;
        } else {
            document.getElementById('numDays').textContent = 'Number of days: ';
            document.getElementById('totalCost').textContent = 'Total cost: ';
        }
    }

    if (room) {
        document.getElementById('roomType').value = 
            room.toLowerCase().includes('deluxe') ? 'deluxe' :
            room.toLowerCase().includes('standard') ? 'standard' :
            room.toLowerCase().includes('family suite') ? 'family_suite' :
            room.toLowerCase().includes('single') ? 'single' :
            room.toLowerCase().includes('executive') ? 'executive' :
            room.toLowerCase().includes('presidential') ? 'presidential' :
            'standard'; 
            
            document.getElementById('roomType').disabled = true;
    }

    if (checkin) {
        document.getElementById('checkinDate').value = checkin;
        document.getElementById('checkinDate').readOnly = true;
    }

    if (checkout) {
        document.getElementById('checkoutDate').value = checkout;
        document.getElementById('checkoutDate').readOnly = true;
    }

    
    updateTotalCost();

    
    document.getElementById('checkinDate').addEventListener('change', updateTotalCost);
    document.getElementById('checkoutDate').addEventListener('change', updateTotalCost);
    document.getElementById('roomType').addEventListener('change', updateTotalCost);

    
    document.getElementById('bookingForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        const checkinDate = new Date(document.getElementById('checkinDate').value);
        const checkoutDate = new Date(document.getElementById('checkoutDate').value);
        const roomType = document.getElementById('roomType').value;

        if (!/^[6-9]\d{9}$/.test(phone)) {
            alert('Invalid phone number. It should start with 6-9 and be 10 digits.');
            return;
        }

        
        if (checkinDate >= checkoutDate) {
            alert('Check-out date must be after check-in date.');
            return;
        }

       
        const timeDifference = Math.abs(checkoutDate - checkinDate);
        const daysStayed = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
        const totalCost = roomPrices[roomType] * daysStayed;

         

    });
});


       
        
        window.location.href = `payment.html?totalCost=${totalCost}`; });
});