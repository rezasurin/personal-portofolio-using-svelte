<script>
</script>

<div class="card-container">
  <slot></slot>
</div>

<style>
  .card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    border-radius: 8px;
    box-shadow:4px 4px 18px 3px rgba(0, 0, 0, 0.2);
    min-width: 120px;
    max-width: 620px;
    max-height: fit-content;
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
</style>