<?php

/**
 * @file
 * Contains DrupalHubMe.
 */
class DrupalHubMe extends \DrupalHubUsers {
  /**
   * Overrides \RestfulEntityBase::controllers.
   */
  protected $controllers = array(
    '' => array(
      \RestfulInterface::GET => 'viewEntity',
    ),
  );

  /**
   * Overrides \RestfulEntityBase::viewEntity().
   *
   * Always return the current user.
   */
  public function viewEntity($entity_id) {
    $account = $this->getAccount();

    if ($permission = \RestfulManager::getRequestHttpHeader('permission')) {
      return array('access' => user_access($permission, $account));
    }

    return parent::viewEntity($account->uid);
  }
}