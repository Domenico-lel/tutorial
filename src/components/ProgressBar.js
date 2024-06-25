function ProgressBar(
  {
    progressPercentage,
    colorProgres,
    lengthBar,
    label

  }
) {

  return <div class="progress mb-2" role="progressbar" aria-label="Success example" aria-valuenow={lengthBar} aria-valuemin="0" aria-valuemax="100">
    <div class={`progress-bar ${colorProgres}`} style={{ width: `${progressPercentage}%` }}>{label} {progressPercentage}%</div>
  </div>
}

export default ProgressBar;