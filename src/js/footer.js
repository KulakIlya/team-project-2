// document.getElementById('emailForm').addEventListener('submit', async function(event) {
//   event.preventDefault(); 
  
//   const emailInput = document.getElementById('emailInput').value;
//   const messageInput = document.getElementById('messageInput').value;

//  try {
//     const response = await fetch('url-server', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 
//         email: emailInput, 
//         message: messageInput })
//     });
//     if (response.ok) {
//       showModal('Your request has been successfully submitted');
//       document.getElementById('emailForm').reset();
//     } else {
//       throw new Error('Failed to submit request');
//     }
//   } catch (error) {
//     showModal('Failed to submit request. Try again later');
//   }

// });

// function showModal(message) {
//   const modal = document.getElementById('modal');
//   const modalContent = document.getElementById('modalContent');
//   modalContent.textContent = message;
//   modal.style.display = 'block';
// }