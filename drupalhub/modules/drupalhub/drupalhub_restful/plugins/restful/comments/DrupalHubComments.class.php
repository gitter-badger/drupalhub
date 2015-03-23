<?php

class DrupalHubComments extends \DrupalHubEntityBase {

  /**
   * {@inheritdoc}
   */
  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    $public_fields['point'] = array(
      'property' => 'cid',
      'process_callbacks' => array(
        array($this, 'processPoint'),
      ),
    );

    $public_fields['nid'] = array(
      'property' => 'node',
    );

    $public_fields['text'] = array(
      'property' => 'comment_body',
      'process_callbacks' => array(
        array($this, 'body'),
      ),
    );

    return $public_fields;
  }

  /**
   * Allow manipulating the entity before it is saved.
   *
   * @param \EntityMetadataWrapper $wrapper
   *   The unsaved wrapped entity.
   */
  public function entityPreSave(\EntityMetadataWrapper $wrapper) {
    parent::entityPreSave($wrapper);
    // todo: fix.
    $wrapper->comment_body->set(array('safe_value' => 'asdasd', 'value' => 'a', 'text_format' => 'full_html'));
  }

  public function __propertyValuesPreprocess($property_name, $value, $public_field_name) {
    if ($public_field_name != 'text') {
      return parent::propertyValuesPreprocess($property_name, $value, $public_field_name);
    }

    return array('value' => 'f');
  }

  /**
   * The full body value.
   *
   * @param $body
   *   The body field.
   * @return mixed
   *   The safe value.
   */
  protected function body($body) {
    return $body['safe_value'];
  }

}
