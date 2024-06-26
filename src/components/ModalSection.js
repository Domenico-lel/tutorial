function ModalSection(
  {
    modalId= "exampleModal",
    buttonClass= "btn-primary",
    buttonLabel,
    modalTitle,
    modalActionButtonLabel,
    modalBody,
    onModalActionClick = ()=> {}
  }
) {

  const fullModalId = `modalId-${modalId}` 


  return <>
    {/* Button trigger modal */}
    <button type="button" className={`btn ${buttonClass} mt-3`} data-bs-toggle="modal" data-bs-target={`#${fullModalId}`}>
      {buttonLabel}
    </button>

    {/* Modal */}
    <div className="modal fade" id={fullModalId} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">{modalTitle}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            {modalBody}
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={onModalActionClick} type="button" data-bs-dismiss="modal" className="btn btn-primary">{modalActionButtonLabel}</button>
          </div>
        </div>
      </div>
    </div>
  </>

}

export default ModalSection;
