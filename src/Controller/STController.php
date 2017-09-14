<?php

namespace Drupal\usMap\Controller;


use Drupal\Core\Controller\ControllerBase;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Template\TwigEnvironment;
use Drupal\Core\Database;




/**

*
* @package Drupal\stateAuthorization\Controller
*/
class STController extends ControllerBase{
  protected $twig;



  public function map(Request $request){


    //Attach associated library

    return [
          '#theme' => 'main_page',
          '#attached' => array(
            'library' => array(
              'usMap/map',
            ),
          ),
        ];
}
}
