#pragma once

#include <QtCore/QString>
#include <QtCore/QSharedPointer>

#include <qrgui/plugins/interpretedPluginInterface/interpretedPluginInterface.h>
#include <qrgui/plugins/pluginManager/editorManagerInterface.h>

#include "ast/callGeneratorFor.h"
#include "ast/elementIdentifier.h"
#include "ast/identifier.h"

#include "commonInfo/variablesTable.h"
#include "commonInfo/generatorConfigurer.h"
#include "commonInfo/scopeInfo.h"

namespace generationRules {
namespace generator {

/// Class that generates result for callGeneratorFor node.
class GeneratorForCallGenerator
{
public:
	/// Returns generated string.
	/// @param callGeneratorForNode - node to generate code for.
	/// @param generatorConfigurer - information about model and metamodel.
	/// @param scopeInfo - information about current scope.
	static QString generatedResult(const QSharedPointer<simpleParser::ast::CallGeneratorFor> &callGeneratorForNode
			, const GeneratorConfigurer &generatorConfigurer
			, ScopeInfo &scopeInfo
			);

private:
	static QString commonGeneratedString(const QSharedPointer<simpleParser::ast::ElementIdentifier> &calledIdentifier
			, const QSharedPointer<simpleParser::ast::Identifier> &generatorNameNode
			, const GeneratorConfigurer &generatorConfigurer
			, ScopeInfo &scopeInfo);

	static qReal::Id idInMetamodel(qReal::EditorManagerInterface *editorManagerInterface
			, const QString &elementName
			, const qReal::Id &diagramId);
};

}
}