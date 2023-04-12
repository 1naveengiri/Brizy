<?php

class Brizy_Editor_Editor_ModuleGroups_WooArchiveProvider implements Brizy_Editor_Editor_ModuleGroups_ProviderInterface {

	use Brizy_Editor_Editor_ModuleGroups_ContextUtils;

	public function supportContext( $context ) {
		return $this->isTemplateType( $context, 'product_archive' );
	}

	public function collect( $context ) {
		return [
			new Brizy_Editor_Editor_ModuleGroups_ModuleGroup( 'archive', [
				"WooArchive",
				"PostTitle",
				"PostExcerpt",
				"Posts"
			] )
		];
	}
}