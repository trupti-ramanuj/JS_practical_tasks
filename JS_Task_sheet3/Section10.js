function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function task28() {
    return new Promise((resolve) => setTimeout(() => resolve('Data fetched successfully'), 2000))
        .then(msg => console.log(msg))
        .catch(err => console.error(' Error:', err))
        .finally(() => console.log('Completed.'));
}
task28()

async function task29() {
    await delay(1000);
    await delay(2000);
    console.log(' Finished testing delay()');
}
task29()

function task30() {
    const op1 = () => delay(200).then(() => 'Result 1');
    const op2 = () => delay(100).then(() => 'Result 2');
    const op3 = () => delay(150).then(() => 'Result 3');
    return op1()
        .then(r1 => { console.log(r1); return op2(); })
        .then(r2 => { console.log(r2); return op3(); })
        .then(r3 => console.log('Sequential Completed:', r3));
}
task30();

async function task31() {
    const p1 = Promise.resolve('Success 1');
    const p2 = Promise.reject(new Error('Forced Failure'));
    const p3 = Promise.resolve('Success 3');
    try {
        await Promise.all([p1, p2, p3]);
    } catch (err) {
        console.log('Task 31 Promise.all short-circuits on rejection:', err.message);
    }
}
task31();

async function task32() {
    const winner = await Promise.race([
        delay(300).then(() => 'Runner 300ms'),
        delay(100).then(() => 'Runner 100ms'),
        delay(500).then(() => 'Runner 500ms')
    ]);
    console.log('Race Winner:', winner);
}
task32();

async function task33() {
    const results = await Promise.allSettled([
        Promise.resolve('P1 Ok'),
        Promise.reject('P2 Rejected'),
        Promise.resolve('P3 Ok')
    ]);
    results.forEach((r, idx) => console.log(` P${idx + 1}: ${r.status}, Value/Reason:`, r.value || r.reason));
}
task33()