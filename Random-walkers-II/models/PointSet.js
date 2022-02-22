class PointSet extends Set{
  add(elem){
    return super.add(typeof elem === 'object' ? JSON.stringify(elem) : elem);
  }
  has(elem){
    return super.has(typeof elem === 'object' ? JSON.stringify(elem) : elem);
  }
  delete(elem) {
    return super.delete(typeof elem ==='object' ? JSON.stringify(elem) : elem )
  }
}