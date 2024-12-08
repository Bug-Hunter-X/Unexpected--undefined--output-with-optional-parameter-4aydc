function printName(name?: string): void {
  if(name === undefined){
    console.log('No name provided');
    return;
  }
  console.log(name);
}

printName();
printName("John Doe");