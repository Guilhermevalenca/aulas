export default function() {
    const data = [
      {name: 'test', value: 'test'},
      {name: 'test', value: 'test'},
      {name: 'test', value: 'test'},
    ]
    return data.map((item, index) => (
      <div key={index}>
        <fieldset>
          <legend>Name: <span>{item.name}</span></legend>
          <p>value: <span>{item.value}</span></p>
        </fieldset>
      </div>
    ));
}