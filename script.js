const names = [
    "Erik Kayoni Kiyeni", "Joshua Ombati", "Clinton Mwavali", "Emmanuel Giggs Tata", "Mbithi Alias Scot",
    "Caroline Shiramba", "Mike Kihunga", "Kevin Madanga", "Kennedy Odhiambo Maina", "Brian Kasaine",
    "Kennedy Onyango", "Ericson Kyalo", "Mutisya Brayo", "Valentine Njeri", "Austine Makhoha", "Ibrahim Kamau",
    "Chris Gitonga", "Rex Masai", "Mathew Njoroge", "Eric Kiraitu", "Kevin Mawasi", "David Chege", "Beasly Kogi",
    "Kennedy Njeru", "Wilson Sitati"// Add more names as needed
];

const colors = ['black', 'white', 'red', 'white', 'green'];
const scrollingNamesDiv = document.querySelector('.scrolling-names');

names.forEach((name, index) => {
    const nameElement = document.createElement('p');
    nameElement.textContent = name;
    nameElement.className = colors[index % colors.length];
    scrollingNamesDiv.appendChild(nameElement);
});
