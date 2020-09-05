export const api = async <Response>(url: string): Promise<Response> => {
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return (await response.json()) as Promise<Response>
}
