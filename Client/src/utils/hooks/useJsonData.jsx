import { useEffect, useState } from "react";

export default function useJsonData(jsonFile) {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true)

                const result = await fetch(`jsonData/${jsonFile}`)

                if (!result.ok) {
                    throw new Error(`Impossible de charger ${jsonFile}`);
                }

                const json = await result.json();

                if (isMounted) {
                    setData(json)
                    setError(null)
                }

            } catch (err) {
                if (isMounted) {
                    setError(err.message)
                }
            } finally {
                if (isMounted) {
                    setLoading(false)
                }
            }
        };
        fetchData()
        return () => {
            isMounted = false
        }
    }, [jsonFile])

    return { data, error, loading }
}
