<script>
  function openCertificates() {
    // List of all certificate files in your images/ folder
    const files = [
      "images/AWS Certified Cloud Practitioner certificate.pdf",
      "images/Another Certificate.pdf",
      "images/YetAnotherCertificate.pdf"
    ];

    // Open each file in a new browser tab
    files.forEach(file => {
      window.open(file, "_blank");
    });
  }
</script>