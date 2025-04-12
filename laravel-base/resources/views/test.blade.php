<h1>Hello world</h1>

@foreach($books as $book)
    <fieldset class="grid gap-3">
        @foreach($book as $index => $value)
            <div>{{ $index }}: {{ $value }}</div>
        @endforeach
    </fieldset>
    <br />
@endforeach