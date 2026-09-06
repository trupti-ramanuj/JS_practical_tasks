function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

async function task39() {
    console.log(' Start');
    await new Promise(resolve => {
        setTimeout(() => {
            console.log('API request started');
            resolve();
        }, 100);
    });
    console.log('End');
}
task39();

function task40() {
    return new Promise(resolve => {
        let count = 5;
        const interval = setInterval(() => {
            if (count > 0) {
                console.log(`Countdown: ${count}`);
                count--;
            } else {
                console.log(' Completed');
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}
task40();

function task41() {
    return new Promise(resolve => {
        let attempts = 0;
        const interval = setInterval(() => {
            attempts++;
            console.log(` Polling attempt #${attempts}`);
            if (attempts >= 5) {
                clearInterval(interval);
                resolve();
            }
        }, 100);
    });
}
task41();

async function task42() {
    async function fetchWithDelay(url, ms) {
        await delay(ms);
        const res = await fetch(url);
        return res.json();
    }
    const data = await fetchWithDelay('https://jsonplaceholder.typicode.com/posts/1', 200);
    console.log(' Delayed Fetch Title:', data.title);
}
task42();