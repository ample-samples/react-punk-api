const isClassic = (first_brewed: string): boolean => {
  const brewedYear = first_brewed.split("/").reverse()[0]
  return (Number(brewedYear) < 2010)
}

export { isClassic }
