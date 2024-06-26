function MultipleBar(
    {
        style,
        label,
        percentage
    }
) {

    // wrapper componente bootstrap Multiple bars che prende in input un array di oggetti (style, label, percentage )

    return <div class="progress-stacked">
        <div class="progress" role="progressbar" aria-label="Segment one" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100" style={{width: `${percentage}`}}>
            <div class={`progress-bar ${style}`}>{label} {percentage}%</div>
        </div>
    </div>
}



export default MultipleBar;