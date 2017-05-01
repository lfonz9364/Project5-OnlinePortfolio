
export default function filterYear(period, components) {
  var output = []
  components.map(function(component){
    period.filter(function(year){
      if(component.props.year.includes(year) && output.indexOf(component) < 0) {
        output.push(component)
      }
    })
  })
  return output
}
