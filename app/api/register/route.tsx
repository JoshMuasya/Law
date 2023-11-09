export async function Register(request: { data: any; }) {
    const { data } = request;

    try {
        const response = await fetch("http://127.0.0.1:8000/lawyers/register/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }); 

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`)
        }

        const responseData = await response.json();

        console.log(responseData);

        return responseData;
    } catch (error) {
        console.error("Request Failed:", error);
    }
}