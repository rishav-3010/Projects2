document.addEventListener('DOMContentLoaded', function() {
 
    const urlParams = new URLSearchParams(window.location.search);
    const totalCost = urlParams.get('totalCost');

   
    if (totalCost) {
        document.getElementById('totalAmount').textContent = totalCost; // Updated the target ID here
    }

  
    document.getElementById('payNowButton').addEventListener('click', function(event) {
        event.preventDefault(); 

        const cardNumber = document.getElementById('cardNumber').value;
        const expiryDate = document.getElementById('expiryDate').value;
        const cvv = document.getElementById('cvv').value;

        
        if (!/^\d{16}$/.test(cardNumber)) {
            alert('Invalid card number. It must be a 16-digit number.');
            return;
        }

        
        const [month, year] = expiryDate.split('/');
        const currentDate = new Date();
        const expiryYear = parseInt(`20${year}`, 10); 
        const expiryMonth = parseInt(month, 10);

        if (!/^\d{2}\/\d{2}$/.test(expiryDate) || expiryMonth < 1 || expiryMonth > 12) {
            alert('Invalid expiry date. Use MM/YY format.');
            return;
        }

        const isExpired = expiryYear < currentDate.getFullYear() ||
                         (expiryYear === currentDate.getFullYear() && expiryMonth < currentDate.getMonth() + 1);
        
        if (isExpired) {
            alert('Your card is expired.');
            return;
        }

        
        if (!/^\d{3}$/.test(cvv)) {
            alert('Invalid CVV. It must be a 3-digit number.');
            return;
        }


        window.location.href = `success.html?totalCost=${totalCost}`;

    });
});
