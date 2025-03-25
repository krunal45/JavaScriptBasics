async function fetchUserData() {
    console.log('Fetching user data');

    let user = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                {
                    'name': 'Ajay',
                    'age': 18
                }
            );
        }, 3000);
    });
    console.log('userData Received!', user);
}
fetchUserData();
console.log('Before Receiving data!');