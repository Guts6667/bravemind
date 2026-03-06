function getEnvVariable(name: string): string {
  const value = process.env[name]

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  return value
}

export const env = {
  NEXT_PUBLIC_APP_NAME: getEnvVariable("NEXT_PUBLIC_APP_NAME"),
}