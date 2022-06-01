<script>
function Node(data) {
     this.data = data
     this.next = null
  }
  
  
   let r=new Node(0)
   let p=new Node(1)
   r.next=p//link
  	
  
  for (let i=0;i<100;i++){
    	let random = Math.floor(Math.random() * 1000 + 1);
      let n = new Node("name" + random)
      p.next = n
      p=n
    	
  }

	console.log(r)
  </script>