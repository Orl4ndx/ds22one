<script>

let vec = [];
for(i=0; i<100000;i++){
  vec[i]=Math.floor(Math.random()*100000+1)
}
delete vec[4];
  vec.splice(3, 5, "new");
  console.log(vec);
  
</script>