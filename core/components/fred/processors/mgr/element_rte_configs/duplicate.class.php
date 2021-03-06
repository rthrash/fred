<?php
/**
 * @package fred
 * @subpackage processors
 */

class FredElementRTEConfigsDuplicateProcessor extends modObjectDuplicateProcessor
{
    public $classKey = 'FredElementRTEConfig';
    public $languageTopics = array('fred:default');
    public $objectType = 'fred.element_rte_configs';
    
    public function process() {
        $this->newObject->fromArray($this->object->toArray());
        $name = $this->getProperty('name');
        $theme = $this->getProperty('theme');

        if (empty($theme)) {
            $this->addFieldError('theme', $this->modx->lexicon('fred.err.element_rte_configs_ns_theme'));
        }
        
        if (empty($name)) {
            $this->addFieldError('name', $this->modx->lexicon('fred.err.element_rte_configs_ns_name'));
            return $this->failure();
        } else {
            if ($this->modx->getCount($this->classKey, ['name' => $name, 'theme' => $theme]) > 0) {
                $this->addFieldError('name', $this->modx->lexicon('fred.err.element_rte_configs_ae_name'));
                return $this->failure();
            }
        }

        $this->newObject->set('name', $name);
        $this->newObject->set('theme', $theme);

        if ($this->saveObject() === false) {
            $this->modx->error->checkValidation($this->newObject);
            return $this->failure($this->modx->lexicon($this->objectType.'_err_duplicate'));
        }

        return $this->success('');
    }
}

return 'FredElementRTEConfigsDuplicateProcessor';