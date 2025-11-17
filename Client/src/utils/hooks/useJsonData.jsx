import { useEffect, useState } from "react";

export default function useJsonData(jsonFile) {
const [data, setData] = useState([])
const [error, setError] = useState(null)

useEffect(() => {
    const fetchData = async () => {
        try {
            const result = await fetch(`jsonData/${jsonFile}`)
            if (!result.ok) {
                throw new Error("Echec dans la récupération des données");
            }
            const resultJson = await result.json();
            setData(resultJson)
        } catch (err) {
            setError(err.message)
        }
    };
    fetchData()
}, [jsonFile])

return { data, error}
}
