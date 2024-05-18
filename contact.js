document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const webhookURL = 'https://discord.com/api/webhooks/1196094794116632727/IAhLkXC5q_HpHLoUXJpptFA_WKVUcJUOMgls2G-iOnb6dSmYF7zKQgKUOO5Ay0cy-wt2';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const payload = {
        content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Message:**\n${message}`
    };

    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset();
        } else {
            alert('Failed to send message.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to send message.');
    });
});
