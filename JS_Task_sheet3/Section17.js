async function task50() {
 
    const payload = { user: 'Test' };
    const jsonRes = await fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });
    const formData = new FormData();
    formData.append('user', 'Test');
    const formRes = await fetch('https://httpbin.org/post', { method: 'POST', body: formData });
    console.log(' JSON Status:', jsonRes.status, '| FormData Status:', formRes.status);
}
task50();

   // application/json: Serialized string payload, structured nested hierarchy, requires explicit header.
   
    // multipart/form-data: Binary streams, boundary delimited keys, suited for files/uploads, browser handles header.
