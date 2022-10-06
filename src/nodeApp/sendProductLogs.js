module.exports = bodies => {
  bodies.length &&
    bodies.map(body => {
      try {
      fetch('/logs/', {
          method: 'POST',
          body: JSON.stringify(body),
        })
      } catch (error) {
        console.log({
          description: "Create logs error",
          error: error.message,
        })

        throw new Error(error)
      }
    })
}
