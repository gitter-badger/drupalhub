<?php

/**
 * @file
 * Contains DrupalHubVideos.
 */

class DrupalHubVideos extends \DrupalHubRestfulNode {

  /**
   * @var integer
   *
   * The playlist ID. When dealing with a playlist the url should be different.
   */
  public $playlist;

  /**
   * Overrides \RestfulEntityBase::publicFieldsInfo().
   */
  public function publicFieldsInfo() {
    $public_fields = parent::publicFieldsInfo();

    $public_fields['duration'] = array(
      'property' => 'field_address',
      'process_callbacks' => array(
        array($this, 'processDuration'),
      )
    );

    $public_fields['embed'] = array(
      'property' => 'field_address',
      'process_callbacks' => array(
        array($this, 'processVideoId'),
      ),
    );

    $public_fields['image'] = array(
      'property' => 'field_address',
      'process_callbacks' => array(
        array($this, 'processImage'),
      ),
    );

    return $public_fields;
  }

  protected function processDuration($field_address) {
    $data = unserialize($field_address['video_data']);
    return gmdate("H:i:s", $data['media$group']['media$content'][0]['duration']);
  }

  protected function processVideoId($field_address) {
    return _video_embed_field_get_youtube_id($field_address['video_url']);
  }

  protected function processImage($field_address) {
    $embed = $this->processVideoId($field_address);
    return "http://img.youtube.com/vi/{$embed}/0.jpg";
  }

  protected function getListForAutocomplete() {
    $nodes = node_load_multiple(array_keys(parent::getListForAutocomplete()));
    $return = array();

    foreach ($nodes as $node) {
      $return[] = $this->viewEntity($node->nid);
    }

    return $return;
  }

}
