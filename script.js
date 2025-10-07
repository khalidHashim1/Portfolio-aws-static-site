// Used on the résumé to make the employment history interactive (each job is clickable)
document.addEventListener('DOMContentLoaded', function () {
    // Placeholder array with employment history data
    const employmentHistory = [
        { id: 1, title: 'Technical support Level 2', company: 'Tasheel Information Technology', years: '2023 - 2024', description: 'Provided technical support, client training, and software release management for the Ministry of Interior project while acting as a liaison between clients and development teams to meet business requirements and improve issue resolution processes, resulting in enhanced client satisfaction.' },
        { id: 2, title: 'Technical support Level 1', company: 'CCC by STC', years: '2024 - Present', description: 'Managed technical issues through a ticketing system, including hardware troubleshooting (PCs, printers, keyboards), system formatting, and real-time monitoring, ensuring continuous 911 operations by promptly resolving incidents or escalating to higher support levels.' }
        // Add more entries as needed
    ];

    const timeline = document.getElementById('timeline');

    // Create timeline entries
    employmentHistory.forEach(job => {
        // Entry container for job
        const entry = document.createElement('div');
        entry.className = 'entry';
        entry.id = 'entry-' + job.id;

        // Title header for job
        const header = document.createElement('div');
        header.className = 'entry-header';
        header.innerText = job.title;

        // Content container for job, initially hidden
        const content = document.createElement('div');
        content.className = 'entry-content';
        content.innerHTML = `<strong>Company:</strong> ${job.company}<br>
                             <strong>Years:</strong> ${job.years}<br>
                             <p>${job.description}</p>`;
        content.style.display = 'none';

        // Append header and content to the entry
        entry.appendChild(header);
        entry.appendChild(content);

        // Event listener to toggle content visibility
        header.addEventListener('click', function () {
            // Check if the clicked header's content is currently shown
            const isContentShown = content.style.display === 'block';
            // Hide all open contents
            document.querySelectorAll('.entry-content').forEach(el => {
                el.style.display = 'none'; // Hide content
            });
            // Deactivate all headers
            document.querySelectorAll('.entry').forEach(el => {
                el.classList.remove('active'); // Remove active class
            });

            if (!isContentShown) {
                // If it was not shown before, display it
                content.style.display = 'block';
                entry.classList.add('active');
            } // If it was shown, it will be hidden as part of the above loop
        });

        timeline.appendChild(entry);
    });
});