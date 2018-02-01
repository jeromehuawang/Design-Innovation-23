function border1(direction){
  var steps = 0 
  while (steps < 4) {
    direction()
    setColor("blue")
    steps = steps + 1
	}
}  
function border2(direction){
  var steps = 0 
  while (steps < 8) {
    direction()
    setColor("blue")
    steps = steps + 1
  }
} 
 setColor("blue")
 border1(down)
 border2(right)
 border1(up)
 border2(left)
 
