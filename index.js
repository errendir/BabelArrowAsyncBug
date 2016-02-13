const fun0 = (a,b='',c) => {
  console.log("Called with",a,b,c);
  return null;
}

const fun1 = async (a,b='',c) => {
  console.log("Called with",a,b,c);
  return null;
}

const fun2 = async function(a,b='',c) {
  console.log("Called with",a,b,c);
  return null;
}

fun0(1,2,3);
fun1(1,2,3);
fun2(1,2,3);
