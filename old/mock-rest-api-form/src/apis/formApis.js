export const getData = async (url) => {
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("Something Went Wrong");
    }
    const data = await response.json();

    console.log("->", data);
    return data;
}

export const postData = async (url, payload) => {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    }) 

    if(!response.ok){
        throw new Error("Something Went Wrong");
    }
    const data = await response.json();
    console.log(data);
    return data;
}

export const updateData = async (url, id, payload) => {
    const response = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "CONTENT-TYPE": "application/json",
        },
        body: JSON.stringify(payload)
    })
    if(!response.ok){
        throw new Error("Something went wrong");
    }

    const data = await response.json();
    return data;
} 

export const deleteData = async (url, id) => {
    const response = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
    }) 

    if(!response.ok){
        throw new Error("Something Went Wrong");
    }
    const data = await response.json();
    console.log(data);
    return data;
}

