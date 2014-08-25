<div class="row activity-stream-instance <?php print $fields['type']->raw; ?>">
  <div class="icons">
    <i class="fa fa-thumbs-up disabled"></i>
    <i class="fa fa-drupal disabled"></i>
    <i class="fa fa-comment disabled"></i>
    <i class="fa fa-pencil disabled"></i>
  </div>
  <div class="activity-header">
    <div class="picture-name"><?php print $fields['picture']->content; ?> <?php print $fields['name']->content; ?></div>
    <?php print $fields['timestamp']->content; ?>
  </div>

  <div class="activity-body">
    <?php print $fields['message_render']->content; ?>
  </div>

  <div class="activity-footer">
  </div>
</div>